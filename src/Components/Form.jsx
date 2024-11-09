import Button from "./Button.jsx";

export default function Form({ props }) {
    const fields = props.fields;

    // Helper function to handle input changes (if needed later)
    const handleInputChange = (e, fieldName) => {
        const value = e.target.value;
        // Update value (you would typically use state management here)
        console.log(`Field ${fieldName} updated with value: ${value}`);
    };

    return (
        <form className='w-full mx-auto p-16 bg-white my-12 border-2 border-primary text-black flex flex-col md:my-3 gap-12'>
            {Object.entries(fields).map(([name, field]) => (
                <div className='flex flex-col justify-between gap-4' key={name}>
                    <label
                        className='w-full'
                        htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
                    <input
                        id={name}
                        type={field.input}       // Type like 'text', 'email', etc.
                        name={name}
                        value={field.value}
                        required={field.required}
                        onChange={(e) => handleInputChange(e, name)} // handle input changes
                        placeholder={`Enter your ${name}`}
                        className='p-4 border-l-4 border-secondary rounded'
                    />

                </div>
            ))}
            <Button props={{
                label: 'Send'
            }}/>
        </form>
    );
}
