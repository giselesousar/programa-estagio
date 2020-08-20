import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import './styles.css';

export default function Detail(props) {
    const { title, children } = props;

    const history = useHistory();

    function handleGoBack() {
        history.goBack();
    }

    return (
    <>
        <Container style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <Card body className="card-container-content">
                <Card.Title>
                    <Container style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <div style={{
                            cursor: "pointer",
                            margin: 5
                        }}
                            onClick={handleGoBack}
                        >
                            <FaArrowLeft />
                        </div>
                        <p className="h2" style={{textAlign:"center"}}>{title}</p>
                        <div></div>
                    </Container>
                </Card.Title>
                {children}
            </Card>
        </Container>
        <Footer/>
        </>
    )
}