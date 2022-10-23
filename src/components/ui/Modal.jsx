const Modal = ({ children, onClick }) => {
  return (
    <section className="mx-auto absolute top-[35%] right-[40%] bg-white border-2 border-gray-200 rounded-lg w-[400px]">
      <header className="text-base font-normal text-gray-700 cursor-pointer p-2 w-fit" onClick={onClick} >X</header>
      <main>{children}</main>
    </section>
  );
};

export default Modal;
