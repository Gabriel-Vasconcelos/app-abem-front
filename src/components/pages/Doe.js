import { Container } from '@mui/system';
import style from './Doe.css';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function Doe(){
    return (
        <Container>
            <h3>Faça a sua doação</h3>
            <main>
            <Grid container direction="row" spacing={4}>
                        <Grid container item direction="column" xs={6}>
                                <Grid item>
                                    <TextField id="standard-basic" label="Nome" variant="standard" />
                                </Grid>                            
                        </Grid>

                        <Grid container item direction="column" xs={6}>
                            <Grid item >
                                <TextField id="standard-basic" label="E-mail" variant="standard" />
                            </Grid>
                        </Grid>
                </Grid>
                <h4>Aponte sua câmera no QR Code para fazer a doação pelo Pix</h4>
                </main>
        </Container>
    )
}