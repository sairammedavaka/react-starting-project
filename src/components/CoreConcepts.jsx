import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import SectionWrapper from "./SectionWrapper.jsx";

function CoreConcepts() {
  return (
    <SectionWrapper title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </SectionWrapper>
  );
}

export default CoreConcepts;
