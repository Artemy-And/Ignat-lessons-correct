import React from "react";
import classes from "./Hello.module.css";





type NameType = {
    name: string
    surname: string
}

function Hello(props: NameType) {
    return (

        <div>
            <div className={classes.container}>
                <div className={classes.messageblue}>
                    <h4 className={classes.messagecontent}>{props.name} {props.surname}</h4>

                    <p>How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? How it it going? </p>
                    <div className={classes.messagetimestampleft}>17:15</div>


                </div>

            </div>
            <img src="https://cdn.ananasposter.ru/image/cache/catalog/poster/film/99/1333-1000x830.jpg"/>

        </div>


    )


}


export default Hello;