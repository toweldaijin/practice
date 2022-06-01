import React from "react";
import { UniversitySearchBox } from "./UniversitySearchBox";
import { CountrySearchBox } from "./CountrySearchBox";
import Grid from '@mui/material/Grid';


export const Home = () => {
    return(
      <>
      <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '0' }}
          >
          <div>
            <p>
            留学ペディアは、海外大学進学者の皆さんに合格体験記をシェアしていただくことで、
            留学を志す皆さんをお助けするサイトです。
            </p>
          </div>
        </Grid>

      </>
    );
    
}