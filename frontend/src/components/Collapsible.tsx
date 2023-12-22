import React, { useState } from 'react';

interface CollapsibleProps {
  header: string;
  description?: string;
  children: React.ReactNode;
}

const Collapsible = ({ header, description, children }: CollapsibleProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="max-w-md mx-auto mt-4 bg-white p-4 rounded-md shadow-md">
      <div
        className="cursor-pointer bg-gray-200 py-2 px-4 rounded-md"
        onClick={toggleCollapsible}
      >
        {header}
      </div>
      {!isCollapsed && (
        <div className="mt-2">
          <p className="text-gray-700">{description}</p>
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export default Collapsible;