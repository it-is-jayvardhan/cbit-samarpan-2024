import ClockLoader from "react-spinners/ClockLoader";
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
export default function Loading(){
    return(
<div className="sweet-loading" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
  <ClockLoader color="#1f3695" size={150} aria-label="Loading Spinner" cssOverride={override} data-testid="loader" />
  <p style={{ marginTop: '20px', fontSize: '30px', color: '#1f3695' }}>Loading...</p>
</div>

    )
}