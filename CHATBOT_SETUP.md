# AI Chatbot Setup Guide

## Overview

Your SunSip website now includes an AI-powered chatbot that helps visitors navigate the site and learn about your mission. The chatbot uses Ollama to run a local AI model.

## Features

- **Smart Navigation**: Helps users find information about donations, volunteering, and impact
- **Mission Information**: Answers questions about SunSip's goals and approach
- **Responsive Design**: Beautiful chat interface that matches your nonprofit aesthetic
- **Context-Aware**: Remembers recent conversation for better responses

## Setting Up Ollama

### 1. Install Ollama

**macOS:**
```bash
# Download and install from the official website
open https://ollama.ai/download

# Or install via Homebrew
brew install ollama
```

**Linux:**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

**Windows:**
Download the installer from https://ollama.ai/download

### 2. Install the AI Model

After installing Ollama, you need to download an AI model. We recommend `llama3.2` for a good balance of performance and quality:

```bash
# Start Ollama service (if not already running)
ollama serve

# In a new terminal, pull the model
ollama pull llama3.2
```

**Alternative Models:**

If you want to use a different model, you can choose from:

- `llama3.2` (default, ~2GB) - Recommended for most users
- `llama3.2:1b` (~1.3GB) - Faster, lighter model
- `mistral` (~4GB) - Good alternative
- `phi3` (~2.3GB) - Microsoft's efficient model

To use a different model, update `/Users/ekans/SunSip/sunsip/server/routes/chat.ts` line 53:
```typescript
model: 'llama3.2', // Change to your preferred model
```

### 3. Start Ollama Service

Before running your app, ensure Ollama is running:

```bash
# Start Ollama in the background
ollama serve
```

You can verify it's running by visiting: http://localhost:11434

## Running Your Application

Once Ollama is set up:

```bash
# Navigate to your project
cd /Users/ekans/SunSip

# Install dependencies (if not already done)
pnpm install

# Start the development server
pnpm dev
```

Your site will be available at http://localhost:8080

## Using the Chatbot

1. **Open the chatbot**: Click the blue chat icon in the bottom-right corner
2. **Ask questions**: Type questions about SunSip, donations, or how to get involved
3. **Navigate**: The chatbot can help direct you to relevant pages

### Example Questions to Try:

- "How can I donate?"
- "Tell me about SunSip's mission"
- "How does my donation help?"
- "How can I volunteer?"
- "What impact has SunSip made?"

## Customization

### Modify the Chatbot Personality

Edit the system prompt in `/Users/ekans/SunSip/sunsip/server/routes/chat.ts` (lines 16-30) to customize how the chatbot responds.

### Update Chatbot Styling

The chatbot component is located at `/Users/ekans/SunSip/sunsip/client/components/Chatbot.tsx`. You can modify colors, positioning, and behavior here.

### Change Fallback Behavior

If Ollama is not available, the chatbot provides a fallback response. You can customize this in the catch block of the API route (line 71).

## Troubleshooting

### Chatbot shows fallback message

**Issue**: Ollama is not running or not accessible

**Solution**:
```bash
# Check if Ollama is running
curl http://localhost:11434/api/tags

# If not running, start it
ollama serve
```

### Model not found error

**Issue**: The AI model hasn't been downloaded

**Solution**:
```bash
ollama pull llama3.2
```

### Slow responses

**Issue**: Model is too large for your hardware

**Solution**: Use a smaller model like `llama3.2:1b`:
```bash
ollama pull llama3.2:1b
```

Then update the model name in `chat.ts`.

### Port 11434 already in use

**Issue**: Ollama is already running or port is occupied

**Solution**:
```bash
# Kill existing Ollama process
pkill ollama

# Restart
ollama serve
```

## Production Deployment

For production, you have several options:

### Option 1: Host Ollama Separately
- Run Ollama on a dedicated server
- Update the API endpoint in `chat.ts` to point to your Ollama server
- Ensure proper CORS settings

### Option 2: Use a Cloud AI Service
- Replace Ollama with OpenAI, Anthropic, or similar
- Update the `/api/chat` endpoint to use the cloud service
- Add API key management (use environment variables)

### Option 3: Disable Chatbot for Production
- The chatbot will automatically fall back to helpful static responses if Ollama is unavailable
- This provides a graceful degradation

## File Locations

- **Chatbot Component**: `/Users/ekans/SunSip/sunsip/client/components/Chatbot.tsx`
- **Chat API Route**: `/Users/ekans/SunSip/sunsip/server/routes/chat.ts`
- **Server Setup**: `/Users/ekans/SunSip/sunsip/server/index.ts`

## Support

For issues with:
- **Ollama**: Visit https://github.com/ollama/ollama
- **Your website**: Check the main README.md for general troubleshooting
