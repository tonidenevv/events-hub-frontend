const Create = () => {
    return (
        <>
            <h1 className="text-center font-bold m-14 text-black text-4xl">Create an Event</h1>
            <form className="flex justify-center items-center flex-col">
                <input name="title" className="border-2 m-2 shadow-2xl border-black focus:outline-none focus:border-blue-500 p-1 px-2 rounded-lg" type="text" placeholder="Title..." />
                <textarea name="description" className="border-2 m-2 shadow-2xl border-black focus:outline-none focus:border-blue-500 p-1 px-2 rounded-lg" id="description" cols="22" rows="3" placeholder="Description..."></textarea>
                <input name="title" className="border-2 m-2 shadow-2xl border-black focus:outline-none focus:border-blue-500 p-1 px-2 rounded-lg" type="text" placeholder="Type... (Concert, Soccer Match)" />
            </form>
        </>
    )
}

export default Create;