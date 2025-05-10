import { useState } from "react";
import { EXAMPLES, CONSTANTS } from "../data.js";
import TabButton from "./TabButton.jsx";
import SectionWrapper from "./SectionWrapper.jsx";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = "Please click a button.";

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <SectionWrapper title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={CONSTANTS.components === selectedTopic}
          onClick={() => setSelectedTopic(CONSTANTS.components)}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={CONSTANTS.jsx === selectedTopic}
          onClick={() => setSelectedTopic(CONSTANTS.jsx)}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={CONSTANTS.props === selectedTopic}
          onClick={() => setSelectedTopic(CONSTANTS.props)}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={CONSTANTS.state === selectedTopic}
          onClick={() => setSelectedTopic(CONSTANTS.state)}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </SectionWrapper>
  );
}

export default Examples;
