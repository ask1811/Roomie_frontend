import React from 'react'

const Radiobutton = () => {
        const [Owner, setOwner] = React.useState(false);
        const [Tenant, setTenant] = React.useState(false);
      
        const handleOwnerChange = () => {
          setOwner(!Owner);
        };
      
        const handleTenantChange = () => {
          setTenant(!Tenant);
        };
      
        return (
          <div>
            <Radiobutton
              label="Owner"
              value={Owner}
              onChange={handleOwnerChange}
            />
            <Radiobutton
              label="Tenant"
              value={Tenant}
              onChange={handleTenantChange}
            />
          </div>
        );
      };
      
export default Radiobutton
