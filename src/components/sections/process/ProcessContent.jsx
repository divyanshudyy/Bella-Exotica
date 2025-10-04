import ProcessSteps from "./ProcessSteps";

function ProcessContent() {
  return (
    <div className="bg-[#FFFBF7] min-h-screen font-sans text-gray-800">
      <header className="py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center tracking-widest uppercase text-[#333]">
          Our Process
        </h1>
      </header>
      <main className="pb-20">
        <ProcessSteps />
      </main>
    </div>
  );
}

export default ProcessContent;
