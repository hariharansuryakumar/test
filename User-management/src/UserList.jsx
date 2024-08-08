import react, {useEffect, useState} from 'react'
import axios from 'axios';
import { Container, Grid, Typography, Button, Paper, Snackbar, Alert, Typography } from '@mui/material'

function UserList() {
    const[users, setUsers] = useState([]);
    const[editingUser, setEditingUser] = useState(null);
    const[snackbar, setSnackbar] = useState({open:false, messeger:'', severity:'success'});

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        } catch (error) {
            console.log('Error fetching users:', error);
            showSnackbar('Error fetching users', 'error');
        }
    }
    const showSnackbar = (message, severity) => {
        setSnackbar({open: true, message, severity});
    }
    const handleSnackbarClose = () => {
        setSnackbar({...snackbar, open: false})

    }
    return (
        <Container>
            <Paper elevation = {3} style = {{padding:'20px', marginTop:'20px'}}>
                <Typography variant='h4' gutterBottom>User Management</Typography>
                <Grid container spacing = {3}>
                    {users.map((user)=>(
                        <p key = {user.id}>{user.name}</p>
                    ))}
                </Grid>

            </Paper>
            </Container>
    )
}