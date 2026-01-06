import { StyleSheet, Platform } from 'react-native';

const ELITE = {
  void: '#0A0E14', // Deepest Black-Blue
  midnight: '#74fcda23', // Card Background
  slate: '#00ffe556', // Borders / Secondary
  silver: '#E2E8F0', // Main Text
  starlight: '#94b8b4ff', // Muted Text
  electric: '#00ffaaff', // Neon Cyan Accent (Action)
  crimson: '#FF4D4D', // Error / High Priority
  emerald: '#00ffd5ff', // Success / Low Priority
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ELITE.void,
  },
  headerContainer: {
    backgroundColor: ELITE.void,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: ELITE.slate,
    marginTop: -10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    color: ELITE.electric,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },

  // --- SEARCH & FILTERS ---
  searchSection: {
    backgroundColor: ELITE.void,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: ELITE.midnight,
  },
  searchInput: {
    backgroundColor: ELITE.midnight,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 6, // Sharp, industrial look
    fontSize: 15,
    color: ELITE.silver,
    borderWidth: 1,
    borderColor: ELITE.slate,
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 10,
    borderBottomWidth: 2,
    borderBottomColor: ELITE.slate,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: ELITE.void,
    borderWidth: 1,
    borderColor: ELITE.slate,
  },
  filterChipActive: {
    backgroundColor: ELITE.electric,
    borderColor: ELITE.electric,
  },
  filterChipText: {
    fontSize: 11,
    color: ELITE.starlight,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  filterChipTextActive: {
    color: ELITE.void,
  },

  // --- TASK LIST AREA ---
  taskListArea: {
    flex: 1,
  },
  countContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  taskCountText: {
    fontSize: 10,
    fontWeight: '900',
    color: ELITE.starlight,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  countNumber: {
    color: ELITE.electric,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  emptyList: {
    textAlign: 'center',
    fontSize: 14,
    color: ELITE.slate,
    letterSpacing: 1,
  },

  // --- DETAILS SCREEN ---
  detailsContainer: {
    flex: 1,
    backgroundColor: ELITE.void,
    padding: 20,
  },
  detailsCard: {
    backgroundColor: ELITE.midnight,
    borderRadius: 8,
    padding: 24,
    borderWidth: 1,
    borderColor: ELITE.slate,
  },
  detailHeader: {
    borderLeftWidth: 3,
    borderLeftColor: ELITE.electric,
    paddingLeft: 20,
    marginBottom: 30,
  },
  detailCategory: {
    fontSize: 11,
    fontWeight: '900',
    color: ELITE.electric,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 8,
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: ELITE.silver,
    letterSpacing: -0.5,
  },
  detailLabel: {
    fontSize: 10,
    fontWeight: '900',
    color: ELITE.starlight,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  detailText: {
    fontSize: 16,
    color: ELITE.silver,
    lineHeight: 26,
    opacity: 0.8,
    marginBottom: 30,
  },
  editToggleButton: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: ELITE.electric,
    alignItems: 'center',
  },
  editToggleText: {
    color: ELITE.electric,
    fontWeight: '900',
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  // --- EDITING MODE ---
  editInput: {
    backgroundColor: ELITE.void,
    borderWidth: 1,
    borderColor: ELITE.slate,
    borderRadius: 4,
    padding: 14,
    fontSize: 16,
    color: ELITE.silver,
    marginBottom: 20,
  },
  editRow: {
    flexDirection: 'row',
    marginBottom: 25,
    gap: 10,
  },
  miniChip: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 2,
    backgroundColor: ELITE.midnight,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: ELITE.slate,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '800',
    color: ELITE.starlight,
  },
  saveButton: {
    backgroundColor: ELITE.electric,
    padding: 18,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: ELITE.void,
    fontWeight: '900',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});
