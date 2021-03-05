import {Box, Card} from '@material-ui/core'


export const ActiveSquaresList = () => {
  
  return(
    <Box component="aside" className="active-squares">
      <h3>Hover squares</h3>

      <Box className="active-squares-list">
        <Card className="active-squares-list-tile">
          <span>row 2 col 1</span>
        </Card>
      </Box>
    </Box>
  )
} 