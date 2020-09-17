import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { List, Spin, Pagination, message, Input } from "antd";

import { spin, tabTitle, hoverCover, nameFilter } from "./Tabs.module.scss";
import {
  addSavedItemActionCreator,
  setSWListActionCreator,
} from "../../redux/actions/SWActionCreators";
import TabImage from "./TabImage";

const getFilteredSavedItems = (savedItems, userInput) => {
  return savedItems.filter((savedItem) =>
    savedItem.name.toLowerCase().includes(userInput)
  );
};

const SavedItemsTabContent = ({
  activeTab,
  savedItems,
  SWLists,
  setSWList,
  addSavedItem,
}) => {
  const [page, setPage] = useState(1);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed && activeTab !== "saved") {
      setSWList(page, activeTab);
    }
    return () => {
      isSubscribed = false;
    };
  }, [page, activeTab, setSWList]);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      setPage(1);
    }
    return () => {
      isSubscribed = false;
    };
  }, [activeTab]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleSaveItem = (item) => {
    if (activeTab !== "saved") {
      const isItemInSaved = savedItems.find(
        (savedItem) => savedItem.name === item.name
      );
      if (isItemInSaved) {
        message.error(`${item.name} is already added!`);
      } else {
        message.info(`${item.name} was saved!`);

        addSavedItem(item);
      }
    }
  };

  const handleChangeUserInput = (e) => {
    setUserInput(e.target.value);
  };

  return SWLists.loading ? (
    <Spin size="large" className={spin} />
  ) : (
    <>
      {activeTab === "saved" && Boolean(savedItems.length) && (
        <Input
          className={nameFilter}
          placeholder="Filter by name"
          onChange={handleChangeUserInput}
        />
      )}
      <List
        itemLayout="vertical"
        size="large"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        dataSource={
          activeTab === "saved"
            ? getFilteredSavedItems(savedItems, userInput)
            : SWLists[activeTab] && SWLists[activeTab].results
        }
        renderItem={(item) => (
          <List.Item key={item.title} onClick={() => handleSaveItem(item)}>
            <TabImage query={item.name} />
            <p className={tabTitle}>{item.name}</p>
            <div className={hoverCover} />
          </List.Item>
        )}
      />
      <Pagination
        defaultCurrent={page}
        onChange={handlePageChange}
        total={
          activeTab === "saved"
            ? getFilteredSavedItems(savedItems, userInput).length
            : SWLists[activeTab] && SWLists[activeTab].count
        }
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  savedItems: state.savedItems,
  SWLists: state.SWLists,
});

const mapDispatchToProps = (dispatch) => ({
  setSWList: (page, tab) => dispatch(setSWListActionCreator({ page, tab })),
  addSavedItem: (itemToSave) => dispatch(addSavedItemActionCreator(itemToSave)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedItemsTabContent);
