import { Audio } from 'react-loader-spinner';
import { ThreeDots } from 'react-loader-spinner'

const Pre = ({ load }) => {
    return (
        <>
            {load && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 999999,
                    }}
                >
                    <ThreeDots
                        height="80"
                        width="80"
                        color="#0FA3B1"
                        ariaLabel="three-dots-loading"
                        visible={true}
                    />
                </div>
            )}
        </>
    );
};

export default Pre;
