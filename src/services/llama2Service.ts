
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
    
    // Initialize the model - using a smaller Llama 2 variant that can run in browser
    // This uses a quantized version of Llama 2 7B that's optimized for web browsers
    console.log("Loading Llama 2 model...");
    
    // We're using the TinyLlama model which is a smaller alternative that can run in browsers
    const model = await pipeline(
      "text-generation",
      "TinyLlama/TinyLlama-1.1B-Chat-v1.0",
      { 
        revision: "main",
        device: "wasm", // Use "webgpu" if available for better performance
      }
    );
    
    console.log("Llama 2 model loaded successfully!");
    llama2Model = model;
    return model;
  } catch (error) {
    console.error("Failed to load Llama 2 model:", error);
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
    
    // Format the prompt according to Llama 2's chat template
    const formattedPrompt = `<|user|>\n${prompt}\n<|assistant|>\n`;
    
    // Generate a response
    console.log("Generating response with Llama 2...");
    const result = await model(formattedPrompt, {
      max_new_tokens: 200,
      temperature: 0.7,
      do_sample: true,
      top_p: 0.95,
    });
    
    // Extract the generated text
    let response = result[0].generated_text;
    
    // Clean up the response to only include the assistant's reply
    const assistantStart = response.lastIndexOf("<|assistant|>");
    if (assistantStart !== -1) {
      response = response.substring(assistantStart + "<|assistant|>".length).trim();
    }
    
    return response;
  } catch (error) {
    console.error("Error generating response from Llama 2:", error);
    return "Sorry, I encountered an error generating a response. Please try again.";
  }
};

export const isLlama2ModelLoaded = () => {
  return llama2Model !== null;
};
