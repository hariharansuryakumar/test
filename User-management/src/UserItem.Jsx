import {Button, Card, CardActions, Grid, Typography} from '@mui/material'
import React from 'react'

function UserItem ({ user, onEdit, onDelete}) {
    return (
        <Grid item xs= {12} sm={6} md={4}>
            <Card style = {{backgroundColor: 'Lavender'}}>
                <CardContent>
                    <Typography variant = 'h5' style = {{color:'black'}}>
                        {user.name}
                    </Typography>
                    <Typography color="textSecondary">{user.email}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color='primary'
                    onclick ={() => onEdit(user)}>
                        Edit
                    </Button>
                    <Button size = "small" color='secondary'
                    onClick={() => onDelete(user.id)}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default UserItem