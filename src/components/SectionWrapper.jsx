function SectionWrapper({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default SectionWrapper;
