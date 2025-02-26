const express = require('express');
const linkedIn = require('linkedin-jobs-api');
const router = express.Router();

// POST /api/jobs/search
router.post('/search', async (req, res) => {
  try {
    const {
      keyword = '',
      location = '',
      dateSincePosted = '',
      jobType = '',
      remoteFilter = '',
      salary = '',
      experienceLevel = '',
      limit = '10',
      sortBy = '',
      page = '0'
    } = req.body;

    const queryOptions = {
      keyword,
      location,
      dateSincePosted,
      jobType,
      remoteFilter,
      salary,
      experienceLevel,
      limit,
      sortBy,
      page
    };

    const jobs = await linkedIn.query(queryOptions);
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

module.exports = router; 