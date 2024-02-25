const allSettled = async promises => (
  Promise.allSettled
    
        .catch(reason => ({
          status: 'rejected',
          reason
        }))
      )
    )
);

export default allSettled;
