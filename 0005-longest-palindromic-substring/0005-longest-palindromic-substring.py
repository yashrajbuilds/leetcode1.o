class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        if not s:
            return ""
        
        start = 0
        max_len = 0
        
        def expand_around_center(left, right):
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            # Return the length of the palindrome found
            return right - left - 1

        for i in range(len(s)):
            # Check for odd-length palindromes (single character center)
            len1 = expand_around_center(i, i)
            # Check for even-length palindromes (two character center)
            len2 = expand_around_center(i, i + 1)
            
            current_max = max(len1, len2)
            
            if current_max > max_len:
                max_len = current_max
                # Calculate the start index for the longest palindrome found
                start = i - (current_max - 1) // 2

        return s[start:start + max_len]