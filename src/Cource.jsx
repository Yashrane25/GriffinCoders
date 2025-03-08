import "./Cource.css";

export default function Cource() {

  return (
    <div className="boxContainer">
      <div className="box">
        <h2>Fingerspelling</h2>
        <h5>Learn the Alphabet</h5>
        <p>Start with the sign language alphabet (ASL, ISL, BSL, etc.).</p>
        <button className="startBtn">Start Learning</button>
      </div>

      <div className="box">
        <h2>Hand Shapes & Movements</h2>
        <p>
          Sign language relies on facial expressions for tone and
          emotions
        </p>
        <button className="startBtn">Start Learning</button>
      </div>

      <div className="box">
        <h2>Practice Facial Expressions</h2>
        <p>Sign language relies on facial expressions for tone and emotions.</p>
        <button className="startBtn">Start Learning</button>
      </div>
    </div>
  );
}
