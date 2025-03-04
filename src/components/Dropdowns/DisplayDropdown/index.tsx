import React, { useCallback, useEffect, useRef, useState, ChangeEvent } from 'react';
import './displayDropdown.css'

import downIcon from '../../../utils/assets/icons/down.svg';
import displayIcon from '../../../utils/assets/icons/Display.svg';
function DisplayDropdown({ grouping, setGrouping, ordering, setOrdering }: { grouping: string, setGrouping: (grouping: string) => void, ordering: string, setOrdering: (ordering: string) => void }) {
  const [visible, setVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const openDropdown = useCallback(() => {
    setVisible(true);
  }, [],);

  const handleClickOutside = useCallback((event: any) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setVisible(false);
    }
  }, []);

  const onGroupingChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => setGrouping(e.target.value), []);
  const onOrderingChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => setOrdering(e.target.value), []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div className='display-dropdown' ref={componentRef}>
      <div className='dropdown-label-container' onClick={openDropdown}>
        <img src={displayIcon} alt="display Icon" width={14} />
        <div className='dropdown-label'>Display</div>
        <img src={downIcon} alt="down Icon" width={14} />
      </div>
      <div className={`dropdown-content-container ${visible && "visible"}`}>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Grouping</div>
          <select name="grouping" id="grouping" value={grouping} onChange={onGroupingChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Ordering</div>
          <select name="ordering" id="ordering" value={ordering} onChange={onOrderingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DisplayDropdown;
