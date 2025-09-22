export default function CoreConcept(props) {
  return (
    <li>
      <imag src={props.img} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
