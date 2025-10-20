import { RequestHandler } from "express";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  message: string;
  history?: Message[];
}

export const handleChat: RequestHandler = async (req, res) => {
  try {
    const { message, history = [] } = req.body as ChatRequest;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    // System prompt to guide the AI assistant
    const systemPrompt = `You are a helpful assistant for SunSip, a nonprofit organization providing clean water access to underserved communities. 

Key information about SunSip:
- Mission: Provide affordable, sustainable clean water solutions to communities in need
- Approach: Youth-led initiative with locally built filtration systems
- Impact: Each $50 donation provides clean water for one person for an entire year
- Focus areas: Immediate impact, sustainable solutions, community engagement
- Technology: Solar-powered systems with smart monitoring and mobile integration

Your role:
- Answer questions about SunSip's mission, impact, and donation process
- Help visitors navigate the website
- Encourage donations and volunteer participation
- Provide information about how clean water access transforms communities
- Be warm, professional, and optimistic in tone

Keep responses concise (2-3 sentences unless more detail is requested). Always be encouraging and solution-focused.`;

    // Build conversation context
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.slice(-5), // Include last 5 messages for context
      { role: 'user', content: message }
    ];

    // Call Ollama API
    const ollamaResponse = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3.2', // Using llama3.2 - you can change this to any model you have installed
        messages: messages,
        stream: false,
      }),
    });

    if (!ollamaResponse.ok) {
      throw new Error('Ollama API request failed');
    }

    const data = await ollamaResponse.json();
    const responseMessage = data.message?.content || 'I apologize, but I encountered an issue. Please try again or contact us directly.';

    res.json({ response: responseMessage });
  } catch (error) {
    console.error('Chat error:', error);
    
    // Provide a fallback response if Ollama is not available
    const fallbackResponse = `I'm here to help you learn about SunSip! We're a nonprofit dedicated to providing clean water access to communities in need. Your donation can make a real difference - just $50 provides clean water for one person for an entire year. Would you like to learn more about our mission, make a donation, or get involved as a volunteer?`;
    
    res.json({ response: fallbackResponse });
  }
};
