import React, { useContext, useState } from "react";
import { Context } from "../../Contexts/Context";
import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TodoList() {
    const { todos, deleteTodo, updateTodo, completedTodo } =
        useContext(Context);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [updateId, setUpdateId] = useState(0);
    const [updateInputValue, setUpdateInputValue] = useState("");

    function updateTodoBtnClick(id) {
        setUpdateId(id);
        setIsOpenModal(true);
        const updateObj = todos.find((item) => item.id === id);
        setUpdateInputValue(updateObj.title);
    }

    function updateInput(e) {
        e.preventDefault();
        updateTodo(updateId, updateInputValue);
        setIsOpenModal(false);
        setUpdateInputValue("");
    }

    return (
        <div className="w-full">
            {todos.length > 0 ? (
                todos.map((item, index) => (
                    <div
                        key={index + 1}
                        className={`${
                            item.isCompleted ? "complated opacity-50" : ""
                        } relative min-h-[70px] flex items-center pr-3  justify-between  text-black py-3 border-b border-b-black`}
                    >
                        <span className="min-w-[7%] font-bold">
                            {index + 1}.
                        </span>
                        <strong className="capitalize text-xs min-w-[8%] max-w-[8%]">
                            {item.title}
                        </strong>

                        <FontAwesomeIcon
                            onClick={() => updateTodoBtnClick(item.id)}
                            className="cursor-pointer min-w-[10%] hover:text-green-500 duration-300"
                            icon="fa-solid fa-pen-to-square"
                        />

                        <FontAwesomeIcon
                            onClick={() => deleteTodo(item.id)}
                            className="cursor-pointer min-w-[5%] hover:text-red-500 mr-[20px] duration-300"
                            icon="fa-solid fa-trash"
                        />

                        
                        <input
                            type="checkbox"
                            className="cursor-pointer"
                            onChange={() => completedTodo(item.id)}
                            checked={item.isCompleted}
                        />
                    </div>
                ))
            ) : (
                <p className="text-center font-bold text-xl text-neutral-500"></p>
            )}
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                <div className="p-3">
                    <input
                        className="p-3 capitalize rounded-md w-full"
                        value={updateInputValue}
                        onChange={(e) => setUpdateInputValue(e.target.value)}
                        type="text"
                    />
                    <button
                        onClick={updateInput}
                        className="p-2 rounded-md bg-sky-500 w-full text-white font-bold mt-2"
                    >
                        Save
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default TodoList;
