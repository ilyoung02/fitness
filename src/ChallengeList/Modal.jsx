function Modal({isOpen, children, closeModal}) {
    return (
        <div style={{display:isOpen ? "block" : "none" }}>
            <div style={{position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.35)",
            }}>
            </div>
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 800,
                maxWidth: "100%",
                maxHeight: "90%",
                overflowY: "auto",
                backgroundColor: "white",
            }}>
            <div>{children}</div>
            <button onClick={closeModal}>닫기</button>
            </div>
        </div>
    );
}

export default Modal;