# Quick Start Guide

## Get Your Redesigned Site Running in 5 Minutes

### Step 1: Install Ollama (for AI Chatbot)

**macOS:**
```bash
brew install ollama
```

**Alternative:** Download from https://ollama.ai/download

### Step 2: Start Ollama & Download AI Model

```bash
# Terminal 1: Start Ollama service
ollama serve

# Terminal 2: Download the AI model (one-time setup)
ollama pull llama3.2
```

### Step 3: Start Your Website

```bash
# In your project directory
cd /Users/ekans/SunSip

# Install dependencies (if needed)
pnpm install

# Start the development server
pnpm dev
```

### Step 4: View Your Site

Open http://localhost:8080 in your browser

### Step 5: Test the Chatbot

1. Click the blue chat icon in the bottom-right corner
2. Try asking: "How can I donate?" or "Tell me about SunSip"
3. The AI will respond with helpful information

## What's New?

✨ **Professional Nonprofit Design**
- Calm blue and white color palette
- Modern Poppins & Inter typography
- Charity:water/UNICEF-inspired aesthetic

🎨 **Redesigned Homepage**
- Hero section with water background
- "How Your Donation Helps" cards with icons
- Impact statistics section
- Testimonial from community leader
- Clear donation CTAs

🤖 **AI Chatbot**
- Helps visitors navigate your site
- Answers questions about donations & impact
- Powered by Ollama (runs locally)
- Graceful fallback if Ollama unavailable

🔗 **Updated Navigation & Footer**
- All existing pages preserved
- Professional footer with social links
- Trust elements (501(c)(3) designation)

## Troubleshooting

**Chatbot not responding?**
- Make sure Ollama is running: `ollama serve`
- Verify model is installed: `ollama list`

**Site won't start?**
- Install dependencies: `pnpm install`
- Check if port 8080 is available

**Want to skip Ollama for now?**
- The chatbot will work with fallback responses
- You can set up Ollama later

## Next Steps

1. **Customize Content**
   - Update impact stats with real numbers
   - Add your own testimonials
   - Upload your logo to `/public/photo.png`

2. **Add Real Images**
   - Replace Unsplash placeholders with your photos
   - Add images of your water projects
   - Update background images

3. **Review Documentation**
   - `REDESIGN_SUMMARY.md` - Complete list of changes
   - `CHATBOT_SETUP.md` - Detailed Ollama setup
   - `AGENTS.md` - Project structure guide

## Build for Production

```bash
# Build optimized version
pnpm build

# Start production server
pnpm start
```

---

**🎉 Your nonprofit website is ready to make an impact!**

Need help? Check the detailed guides in the documentation files.
