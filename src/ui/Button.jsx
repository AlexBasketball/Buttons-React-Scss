import "./buttons.scss";

const Button = (props) => {
  return (
    <div>
      <button disabled={props.disabled} className={`${props.className}`}>
        <span className="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.99996 18.3334H1.66663V15H4.99996V18.3334ZM11.6666 18.3334H8.33329V15H11.6666V18.3334ZM18.3333 18.3334H15V15H18.3333V18.3334ZM8.33329 15H4.99996V11.6667H8.33329V15ZM15 15H11.6666V11.6667H15V15ZM4.99996 11.6667H1.66663V8.33335H4.99996V11.6667ZM11.6666 11.6667H8.33329V8.33335H11.6666V11.6667ZM18.3333 11.6667H15V8.33335H18.3333V11.6667ZM8.33329 8.33335H4.99996V5.00002H8.33329V8.33335ZM15 8.33335H11.6666V5.00002H15V8.33335ZM4.99996 5.00002H1.66663V1.66669H4.99996V5.00002ZM11.6666 5.00002H8.33329V1.66669H11.6666V5.00002ZM18.3333 5.00002H15V1.66669H18.3333V5.00002Z"
              fill="white"
            />
          </svg>
        </span>
        <span className="text">{props.children}</span>
        <span className="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.99996 18.3334H1.66663V15H4.99996V18.3334ZM11.6666 18.3334H8.33329V15H11.6666V18.3334ZM18.3333 18.3334H15V15H18.3333V18.3334ZM8.33329 15H4.99996V11.6667H8.33329V15ZM15 15H11.6666V11.6667H15V15ZM4.99996 11.6667H1.66663V8.33335H4.99996V11.6667ZM11.6666 11.6667H8.33329V8.33335H11.6666V11.6667ZM18.3333 11.6667H15V8.33335H18.3333V11.6667ZM8.33329 8.33335H4.99996V5.00002H8.33329V8.33335ZM15 8.33335H11.6666V5.00002H15V8.33335ZM4.99996 5.00002H1.66663V1.66669H4.99996V5.00002ZM11.6666 5.00002H8.33329V1.66669H11.6666V5.00002ZM18.3333 5.00002H15V1.66669H18.3333V5.00002Z"
              fill="white"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Button;
