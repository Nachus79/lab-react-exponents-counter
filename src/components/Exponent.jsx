const Exponent = ({ num, exponent }) => {
    const result = num ** exponent;  
    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">n{exponent}</p> {/*No sé cómo poner el número en exponente*/}
        <p className="exponent-result">{num} {exponent > 1 && ' * '.repeat(exponent - 1)} = <span className="total">{result}</span>
        </p>
      </div>
    );
  };
  
  export default Exponent;
  