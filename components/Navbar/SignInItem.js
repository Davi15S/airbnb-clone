export default function SignInItem({ txt, style }) {
    return (
        <p className={`pl-4 pr-12 py-2 hover:bg-gray-100 opacity-80 cursor-pointer ${style}`}>
            {txt}
        </p>
    )
}