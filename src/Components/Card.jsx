export default function Card({props}) {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full -z-10 relative'>
                <img className='w-full border-2 border-primary' src={props.img} alt='card-1-img'/>
            </div>
            <div className='w-full bg-primary ml-4 -mt-12 py-8 flex gap-2 text-center flex-col justify-center border-2 border-tertiary min-h-48 p-4 md:p-0'>
                <h2 className='text-xl'>{props.title}</h2>
                <p>{props.text}</p>
                <small>{props.pricing}</small>
            </div>
        </div>
    )
}