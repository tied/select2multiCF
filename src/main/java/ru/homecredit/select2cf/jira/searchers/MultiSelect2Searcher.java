package ru.homecredit.select2cf.jira.searchers;

import com.atlassian.jira.issue.customfields.searchers.MultiSelectSearcher;
import com.atlassian.jira.util.JiraComponentFactory;
import com.atlassian.jira.util.JiraComponentLocator;

import javax.inject.Named;

@Named
public class MultiSelect2Searcher extends MultiSelectSearcher {
    public MultiSelect2Searcher()
    {
        super(new JiraComponentLocator(), JiraComponentFactory.getInstance());
    }
}
