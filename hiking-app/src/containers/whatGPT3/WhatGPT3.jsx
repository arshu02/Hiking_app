import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="
        GPT-3 (Generative Pre-trained Transformer 3) is an advanced language generation model developed by OpenAI. It is built on the Transformer architecture and is the third iteration in the GPT series. GPT-3 is trained on a massive corpus of text data from the internet, enabling it to understand and generate human-like text with remarkable accuracy and fluency. With 175 billion parameters, GPT-3 is one of the largest language models ever created, allowing it to capture complex language patterns and nuances."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="chatbots are powerful tools that enhance user experiences, streamline processes, and drive efficiency across various industries and domains. With advancements in AI and natural language understanding, chatbots continue to evolve and play an increasingly important role in digital interactions."
      />
      <Feature
        title="Knowledgebase"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
      <Feature
        title="Education"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
    </div>
  </div>
);

export default WhatGPT3;
