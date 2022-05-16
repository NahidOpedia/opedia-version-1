export default function SectionTitle({ section,HeadTitle, title, description }) {
  return (
    <>
      <div className="section-title">
      {section && <h5>{section}</h5>}
        {title && <h3>{title} </h3>} 
        {HeadTitle && <h1>{HeadTitle} </h1>}
        <p className="pera">{description}</p>
      </div>
    </>
  );
}
