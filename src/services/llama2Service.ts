
import { pipeline, env } from "@huggingface/transformers";

// Enable WebGPU if available for better performance
env.backends.onnx.wasm.numThreads = 2;

let llama2Model: any = null;
let isModelLoading = false;

export const initLlama2Model = async () => {
  if (llama2Model !== null) return llama2Model;
  if (isModelLoading) return null;
  
  try {
    isModelLoading = true;
    
    // Initialize the model - using a smaller model that's optimized for web browsers
    console.log("Loading language model...");
    
    // We're using the Xenova/distilbert-base-uncased model which is smaller and works well in browsers
    const model = await pipeline(
      "text-generation",
      "Xenova/tiny-random-gpt2",
      { 
        revision: "main",
        device: "wasm",
      }
    );
    
    console.log("Language model loaded successfully!");
    llama2Model = model;
    return model;
  } catch (error) {
    console.error("Failed to load language model:", error);
    return null;
  } finally {
    isModelLoading = false;
  }
};

export const generateLlama2Response = async (prompt: string): Promise<string> => {
  try {
    const model = await initLlama2Model();
    
    if (!model) {
      return "I'm having trouble connecting to my language model. Please try again later.";
    }
    
    // Generate a response
    console.log("Generating AI response...");
    const result = await model(prompt, {
      max_new_tokens: 100,
      temperature: 0.7,
      do_sample: true,
      top_p: 0.95,
    });
    
    // Extract the generated text
    let response = result[0].generated_text;
    
    // Remove the input prompt from the response to only show the new text
    if (response.startsWith(prompt)) {
      response = response.substring(prompt.length).trim();
    }
    
    return response || "I'm not sure how to respond to that.";
  } catch (error) {
    console.error("Error generating response:", error);
    return "Sorry, I encountered an error generating a response. Please try again.";
  }
};

export const isLlama2ModelLoaded = () => {
  return llama2Model !== null;
};
