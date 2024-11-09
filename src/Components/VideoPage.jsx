import Button from "./Button.jsx";

export default function VideoPage() {
    return (
        <div className='flex relative w-screen min-h-screen bg-white'>
            <video preload={'/src/assets/bg-vid.mp4'} muted loop autoPlay={true}
                   className='object-cover w-screen opacity-20'>
                <source src="/src/assets/bg-vid.mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className='absolute mx-auto flex flex-col w-full h-full my-64 items-center text-black text-center'>
                <h1 className='text-l'>Take Charge of <strong>Your Life </strong></h1>
                <h2 className='my-2 mb-20 text-2xl'><strong>Empower</strong> Yourself
                    With Counselling</h2>
                <Button props={{label: 'Learn More'}}/>
            </div>

        </div>
    )
}