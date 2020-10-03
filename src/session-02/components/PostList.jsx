import React from 'react';
import Card from './Card'
import Grid from '@material-ui/core/Grid'

export default function PostList(props) {
    // eslint-disable-next-line array-callback-return

    let result = props.data.map((item) => {
        return (
            <Grid item>
                <Card data={item}/>
            </Grid>
        )
    })

    return (result)

}
