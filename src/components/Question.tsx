const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div className="flex flex-col">
      <h3 className="pbl-title">{question}</h3>
      <p className="pbl-paragraph text-lg!">{answer}</p>
    </div>
  );
};

export default Question;
