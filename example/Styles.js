/* Copyright Airship and Contributors */

import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#E0A500',
  },
  contentContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#E0A500',
  },
  stackRight: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'flex-start',
    backgroundColor: '#E0A500',
  },
  cellContainer: {
    flex: 0,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0A500',
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  miniCellContainer: {
    flex: 0,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0A500',
    marginRight: 10,
    marginLeft: 10,
  },
  managerCell: {
    flex:0,
    flexDirection:'row',
    padding:10
  },
  channel: {
    fontSize: 16,
    color: '#0d6a83',
    textAlign: 'center',
    padding: 10,
  },
  rowLabel: {
    flexDirection:'row',
    color: '#0d6a83',
    fontSize: 16,
    marginRight: 10
  },
  instructions: {
    fontSize: 11,
    textAlign: 'center',
    color: '#0d6a83'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  textInput: {
    flex:1,
    color:'#0d6a83',
    alignSelf: 'flex-start',
    width: 100,
    flexDirection:'row',
    height: 35,
    borderColor:'white',
    borderWidth: 1,
  },
  inputButton: {
    width: 150,
    height: 35,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    backgroundColor: '#0d6a83'
  },
  dash: {
   backgroundColor: 'white',
   height: 2,
   width: 10,
   position: 'absolute',
   left: 5,
   top: 8.5,
  },
  container: {
   flex: 1,
   marginTop: 20,
  },
  item: {
   opacity: 1,
   padding: 10,
  },
  itemTitle: {
   fontSize: 20,
   fontWeight: 'bold',
  },
  itemSubtitle: {
   fontSize: 15,
  },
  itemSeparator: {
   height: 1,
   backgroundColor: "#CEDCCE",
   marginTop: 15,
  },
  loadingIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
