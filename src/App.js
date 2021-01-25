// import "./App.css";
import { Grid } from "@material-ui/core";
import randomColor from "randomcolor";

const App = () => {
  return (
    <div className="App">
            
      <Grid container spacing={2}>
                
        <Grid item xs>
                    <div style={{ background: randomColor() }}> A</div>
                  
        </Grid>
                
        <Grid item xs={7}>
                    <div style={{ background: randomColor() }}> B </div>
                  
        </Grid>
                
        <Grid item xs>
                    <div style={{ background: randomColor() }}> C </div>
                  
        </Grid>
                
        <Grid item xs>
                    <div style={{ background: randomColor() }}> D </div>
                  
        </Grid>
              
      </Grid>
            
      <Grid container spacing={2}>
                
        <Grid item xs>
                    <div style={{ background: randomColor() }}> 1</div>
                  
        </Grid>
                
        <Grid item xs>
                    <div style={{ background: randomColor() }}> 2 </div>
                  
        </Grid>
                
        <Grid item xs>
                    <div style={{ background: randomColor() }}> 3 </div>
                  
        </Grid>
                
        <Grid item xs>
                    <div style={{ background: randomColor() }}> 4 </div>
                  
        </Grid>
              
      </Grid>
          
    </div>
  );
};

export default App;
