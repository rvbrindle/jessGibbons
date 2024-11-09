export default function Button({props}) {
    return (
        <>
            <div className='bg-primary border-2 border-secondary bg-transparent py-2 px-4 cursor-pointer hover:bg-secondary hover:text-white transition-all ease-in-out'>
                { props.label }
            </div>
        </>
    )
}