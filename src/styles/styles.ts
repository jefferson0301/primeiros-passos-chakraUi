export const customScrollBar = {
    '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': { //barrinha
        width: '6px',
        background: '#f1f1f1',
      },
      '&::-webkit-scrollbar-thumb': {//parte de tras do scrollbar
        background: '#A0AEC0',
        borderRadius: '24px',
        '&:hover': {
          background: '#718096',
        },
      },
}