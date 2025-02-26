export default function Paragraf({size="md", color="primary", children}){
  const sizes ={
    "md":"text-md",
    "sm":"text-sm"
  }

  const colors ={
    "primary":"text-black",
    "secondary":"text-neutral-500"
  }

    return <p className={`${sizes[size]} ${colors[color]}`}>{children}</p>
}