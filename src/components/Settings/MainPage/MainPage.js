import hasErrors from "../../../helpers/validators";
const MainPage = ({
    currUser,
    fileUploadRef,
    image,
    values,
    initialValues,
    selectedFile,
    handleChange,
}) => {
    const handleImageClick = () => fileUploadRef.current.click();

    const handleSaveClick = () => {
        console.log('clicked');
    }

    const isButtonDisabled = () => {
        if (hasErrors.username(values.username) || hasErrors.email(values.email)) return true;

        if (initialValues.username === values.username && initialValues.email === values.email && !selectedFile) return true;

        return false;
    }

    return (
        <>
            <img
                onClick={handleImageClick}
                className="lg:mt-8 rounded-full lg:w-48 hover:brightness-75 hover:shadow-2xl lg:h-48 w-32 h-32 shadow-lg cursor-pointer border-black"
                src={image ? image : currUser.avatarUrl ? currUser.avatarUrl : currUser.gender === 'male' ? '/male.png' : '/female.png'}
                alt="Avatar"
            />
            <div className="flex lg:ml-28 flex-col items-center mt-10">
                <label htmlFor="username" className="font-semibold text-xl mb-1">
                    Username
                </label>
                <input
                    value={values.username}
                    onChange={handleChange}
                    type="text"
                    className="mb-6 border-2 w-48 h-10 border-black rounded-lg p-1 focus:outline-none focus:border-blue-700"
                    name="username"
                    id="username"
                />
                <label htmlFor="email" className="font-semibold text-xl mb-1">
                    Email
                </label>
                <input
                    value={values.email}
                    onChange={handleChange}
                    type="text"
                    className="mb-6 border-2 w-48 h-10 border-black rounded-lg p-1 focus:outline-none focus:border-blue-700"
                    name="email"
                    id="email"
                />
                <div className="mt-6">
                    <button disabled={isButtonDisabled()} onClick={handleSaveClick} className={`bg-blue-600 hover:bg-blue-800 ease-in-out duration-150 font-semibold text-white px-4 py-2 rounded-md ${isButtonDisabled() && 'cursor-not-allowed'}`}>Confirm Changes</button>
                </div>
            </div>
        </>
    )
}

export default MainPage;