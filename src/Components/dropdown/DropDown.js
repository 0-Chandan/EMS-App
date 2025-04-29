import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, TextInput } from 'react-native';
import { height } from '../../constant/Dimensions';

const DropDown = ({
  label,
  options = [],
  isrequired = false,
  value,
  onchangeText,
  iserr = false,
  errmsg = '',
}) => {
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  const openDropdown = () => {
    setVisible(true);
    setSearchText('');
    setFilteredOptions(options);
  };

  const handleSelect = (item) => {
    onchangeText(item); // call parent
    setVisible(false);
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = options.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <View style={{ marginBottom: 7 }}>
      {/* Label */}
      {label && (
        <Text style={styles.label}>
          {label} {isrequired && <Text style={{ color: 'red' }}>*</Text>}
        </Text>
      )}

      {/* Dropdown button */}
      <TouchableOpacity
        style={[
          styles.dropdownButton,
          iserr && { borderColor: 'red' }
        ]}
        onPress={openDropdown}
      >
        <Text style={{ color: value ? '#000' : '#888' }}>
          {value || 'Select an option'}
        </Text>
      </TouchableOpacity>

      {/* Error message */}
      {iserr && errmsg !== '' && (
        <Text style={styles.errorMsg}>{errmsg}</Text>
      )}

      {/* Modal */}
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setVisible(false)} activeOpacity={1}>
          <View style={styles.modalContent}>
            {/* Search bar inside */}
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchText}
              onChangeText={handleSearch}
            />

            <FlatList
              data={filteredOptions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.optionButton} onPress={() => handleSelect(item)}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={() => (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>No results found</Text>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: height * 0.008,
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft:'2.6%'
  },
  dropdownButton: {
    width:'94%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft:'2.5%',
    
  },
  errorMsg: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 10,
    padding: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  optionButton: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default DropDown;
