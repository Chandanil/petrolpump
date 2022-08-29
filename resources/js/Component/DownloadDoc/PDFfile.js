import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'red',
    display: "flex",
  },
  section: {
    backgroundColor:"#ff0505",
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const PDFfile = (props) => {
  return (
    <>
      <Document>
    <Page size="A4" style={backgroundColor= '#000000'}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
    </>
  )
}