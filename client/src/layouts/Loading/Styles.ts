import styled from "styled-components";



export const StyleLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;

    .wrapper-loading {
        display: flex;
        flex-direction: column;
        align-items: center;

        .common-loading {
            height: 25px;
            width: 25px;
            color: red;
    
            animation: rotation 5s infinite linear;
    
            @keyframes rotation {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(600deg);
                }
            }
        }

        .title-loading {
            font-size: 12px
        }
    }
    

    
`