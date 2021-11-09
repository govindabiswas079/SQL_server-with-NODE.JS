INSERT INTO
    [dbo].[jobsD] (
        [Name],
        [Position],
        [Office],
        [Salary],
        [currentDate]
    )
VALUES
    (
        @Name,
        @Position,
        @Office,
        @Salary,
        @currentDate
    )
SELECT
    SCOPE_IDENTITY() AS Id