export default function SignInItem({ txt, style, onClick }) {
    return (
        <p onClick={onClick} className={`pl-4 pr-12 py-2 hover:bg-gray-100 opacity-80 cursor-pointer ${style}`}>
            {txt}
        </p>
    )
}