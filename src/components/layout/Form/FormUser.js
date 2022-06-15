import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import style from './FormUser.css'



export default function FormUser(){
    return(

        <Container maxWidth="lg">
            <main>
                <Grid container direction="row" spacing={4}>
                        <Grid container item direction="column" xs={6}>
                            <Grid item>
                                <h1>Sobre a ABEM</h1>
                            </Grid>
                            <Grid item>
                                <h3>A Associação Beneficente Estrela da Manhã, mais conhecida como ABEM...</h3>
                            </Grid>
                        </Grid>

                        <Grid container item direction="column" xs={6} >
                            <form action='#'>
                                <Grid item direction="row">
                                    <h2> Login</h2>
                                </Grid>
                                <Grid item direction="row"> 
                                    <TextField id="standard-basic" label="E-mail" variant="standard" />
                                </Grid>
                                
                                <Grid item direction="row">
                                    <TextField id="standard-basic" label="Senha" variant="standard" />
                                </Grid>
                                
                                <Grid item direction="row">
                                    <Button className={style.botao}>Primary</Button>
                                </Grid>
                                <Grid item container direction="column">
                                    <Grid item>
                                        <p> Você já possui uma conta?</p>
                                    </Grid>
                                    <Grid item>
                                    <Link to href="#" underline="always">
                                        {'Cadastre-se'}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                </Grid>
            </main>

        </Container>
    )
}


            /*
            <section>
                <h1>Sobre a ABEM</h1>
                <h2>A Associação Beneficente Estrela da Manhã, mais conhecida como ABEM...</h2>
            </section>
            
            <section>
                <form action='#'>
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                </form>
            </section>

            */